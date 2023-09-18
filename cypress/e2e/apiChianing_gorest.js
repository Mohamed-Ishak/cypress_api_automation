describe('GOREST API Chianing',()=>{


        const authToken = 'Bearer 1a689d83b23d57bf7e4a16c74e16ab6897a43e530359a11e52ba6ea2c8733775'

        it('Create, Update, delete user in GO Rest APi',()=>{
            //https://gorest.co.in/public/v2/users

            cy.request({
                method:'POST',
                url:'https://gorest.co.in/public/v2/users',
                body:{
                    name:'Mohamed Ishak',
                    gender:'male',
                    email:Math.random().toString(5).substring(1)+'@gmail.com',
                    status:'active'
                }, 
                headers:{
                    Authorization:authToken
                }
            }).then(response =>{
                expect(response.status).to.eq(201)
                const userId =  response.body.id

               //Updateing the user 
               cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                body:{
                    name :'Ahmed Hassan'
                }, 
                headers:{
                    Authorization:authToken
                }

               }).then(response => {
                expect(response.status).to.eq(200)
                const userName = response.body.name
                expect(userName).to.eqls('Ahmed Hassan')

                 //Delete the user
               cy.request({
                method:'DELETE',
                url:`https://gorest.co.in//public/v2/users/${userId}`,
                
                headers:{
                    Authorization:authToken
                }
               }).then(response =>{
                expect(response.status).to.eq(204)
               })
               })
              
            })
        })
    })
