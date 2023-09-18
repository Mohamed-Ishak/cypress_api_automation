

describe('Parsing Response',() =>{


    it('Parsing Simple JSON response',()=>{
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',

        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eqls(1)
            expect(response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            expect(response.body[0].price).to.eq(109.95)
            expect(response.body[0].rating.rate).to.eq(3.9)

            
            expect(response.body[19].id).to.eqls(20)
            expect(response.body[19].title).to.equal('DANVOUY Womens T Shirt Casual Cotton Short')
            expect(response.body[19].price).to.eq(12.99)
            expect(response.body[19].rating.rate).to.eq(3.6)
        })
    })


    it('Parsing Complex JSON response',()=>{

        let totalPrice = 0 ;
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',
            qs:{limit:3}

        }).then(response => {
            expect(response.status).to.eq(200)
            response.body.forEach(element => {
                totalPrice +=  element.price;
            })
      //      expect(totalPrice).to.equal(899.23) // limit 5
            expect(totalPrice).to.equal(188.24) // limit 3
        })
    })


})