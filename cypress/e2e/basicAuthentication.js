describe('Authentication',()=>{


    it('Basic Authentication',() =>{
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user : 'postman',
                pass:  'password'
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })


    it('Digest Authentication',() =>{
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username : 'postman',
                password:  'password',
                method:'digest'
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })

    //Bearer TOKEN  = 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


    it('Bearer TOKEN Authentication',() =>{

        const token = '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'
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer '+token
            }
           
        }).then(response => {
            expect(response.status).to.eq(200)
            cy.log(response)
        })
    })
})