import {expect, should} from 'chai';
import supertest from 'supertest-as-promised';
import {connect, disconnect, mongoose} from '../../libs/db';
import seed from '../../seed';
import seedTemplates from '../../seed/templates.json';
import app from '../../app';

const api = supertest.agent(app.listen());


describe('Templates controller', () => {
  before(async () => await connect());
  beforeEach(async () => await seed(mongoose.connection));
  after(() => disconnect());


  it('should return all templates on call GET /api/templates', async () => {
    const response = await api.get('/api/templates')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).have.property('templates');

    seedTemplates.forEach((template, key) => {
      Object.keys(template).forEach((templateKey) => {
        expect(response.body.templates[key][templateKey]).to.deep.equal(template[templateKey]);
      })
    });
  });

  it('should not save template with no passed parameters POST /api/templates', async () => {
    const response = await api.post('/api/templates')
      .expect(400)
      .expect('Content-Type', /json/);

    expect(response.body).have.property('message');
    expect(response.body.message).have.property('message');
    expect(response.body.message).have.property('errors');
  });

  it('should save template with proper parameters POST /api/templates', async() => {
    const newTemplate = {
      id: 'testId',
      name: 'test',
      items: [{
        id: 'testId1',
        name: 'test1',
        done: false
      },{
        id: 'testId2',
        name: 'test2',
        done: true
      }]
    };

    const response = await api.post('/api/templates')
      .send(newTemplate)
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).to.deep.equal(newTemplate);
  });

  it('should not update template with no passed parameters PUT /api/templates', async () => {
    const response = await api.put('/api/templates')
      .expect(400)
      .expect('Content-Type', /json/);

    expect(response.body).have.property('message');
    expect(response.body.message).have.property('message');
    expect(response.body.message).have.property('errors');
  });

  it('should update template with proper parameters PUT /api/templates', async() => {
    let updateTemplate = seedTemplates.slice()[0];
    updateTemplate.name = 'New template name';

    const response = await api.post('/api/templates')
      .send(updateTemplate)
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).to.deep.equal(updateTemplate);
  });


});