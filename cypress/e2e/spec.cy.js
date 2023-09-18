
///<reference types='cypress'/>
describe('api Testing', () => {
  it('Approuch 1', () => {
    

   const requestBody ={
    
    tourist_name: Math.random().toString(5).substring(2),
    tourist_email: Math.random().toString(5).substring(2)+'@gmail.com',
    tourist_location: "Roma",
    createdat: new Date()
   }
    cy.request({
      method: 'POST',
      url:'http://restapi.adequateshop.com/api/Tourist',
      body:requestBody
    }).then(response => {
      expect(response.status).to.equal(201)
      expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
      expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
      expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
    })
  })

  it.only('Approuch 2 fixture file', () => {

cy.fixture('example').then(myData =>{
    const reqBody = myData;
     cy.request({
       method: 'POST',
       url:'http://restapi.adequateshop.com/api/Tourist',
       body:reqBody
     }).then(response => {
       expect(response.status).to.equal(201)
       expect(response.body.tourist_name).to.eq(reqBody.tourist_name)
       expect(response.body.tourist_email).to.eq(reqBody.tourist_email)
       expect(response.body.tourist_location).to.eq(reqBody.tourist_location)
       expect(response.body).has.property('tourist_email',reqBody.tourist_email)
       expect(response.body).to.have.property('tourist_email',reqBody.tourist_email)
     })
   })
})

})