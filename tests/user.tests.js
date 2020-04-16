const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

// chai.use(chaiHttp);
// //TO DO this test is not done (not sure what to expect because I don't have a message back maybe a success 200?)
// describe('user API service'), () => {
//     it('should add a new user' (done) => {
//         const testUser = {
//             firstName: 'Testy',
//             lastName: 'McTest',
//             userName: 'theTester',
//             password: 'password',
//             birthMonth: 1,
//             birthYear: 1900,
//         };
//         const expected = testUser;

//         chai
//         .request('http://localhost:4000')
//         .post('/api/user')
//         .send(testUser)
//         .end((err,resp) => {
//             console.log(resp.body);
//             expect(resp.body).to.eql(expected);
//             done();
//         })