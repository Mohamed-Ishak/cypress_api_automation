describe('',()=>{

    let authenticationToken = null;

    before('',()=>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients',
            headers:{
                'Content-type':'application/json'
            },

            body: {
                clientName:'ABC',
                clientEmail: Math.random().toString(5).substring(2)+'@gmail.com'
            }

        }).then(response => {
            authenticationToken = response.body.accessToken;
        })
    }),

    before('Submit new order',()=>{

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-type':'application/json',
                'Authorization': 'Bearer '+authenticationToken
            },

            body: {
                "bookId": 1,
                "customerName": "John"
              }

    }).then(response => {
        expect(response.status).to.eq(201);
        expect(response.body.created).to.eq(true);
    })
})

it('Fetch the orders',()=> {
    cy.request({
            method:'GET',
            url: 'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-type':'application/json',
                'Authorization': 'Bearer '+authenticationToken
            },
            Cookies:{
                'coockieName':'mycookie'
            }
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).has.length(1);
    })
})
})