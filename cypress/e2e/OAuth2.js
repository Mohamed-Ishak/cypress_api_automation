// Client ID  = 5387f0ad82ac612717e6
//Client Secret = 4fdeedbd7416bef9cf619ef3b2363fa70a477059

// Authorization code=16664feb745062f53f22


//Pre Requisit : genetrate a Code 
//https://github.com/login/oauth/authorize?client_id=5387f0ad82ac612717e6
// POST request to get the token

//1) GET the access token 
//https://github.com/login/oauth/access_token

/*
Quary Param  
           client_id
           client_secret
           code 

*/

// 2) Sent GET request by using access Token 
//https://api.github.com/user/repos
//Authentication : accessToken
describe('OAuth2.0', ()=>{

    let accessToken = ""
    it('GET the Oath2 access Token',() =>{
cy.request({
    method:'POST',
    url:'https://github.com/login/oauth/access_token',
    qs:{
        client_id:'5387f0ad82ac612717e6',
        client_secret:'4fdeedbd7416bef9cf619ef3b2363fa70a477059',
        code:'b4f36a6ab4b09a11d44e'
    }
    
}).then(response =>{
    //access_token=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&scope=&token_type=bearer
   const params = response.body.split('&')
   cy.log(params)
   accessToken  = params[0].split('=')[1]
   cy.log(accessToken)
})
    })

    it('OAUth2 Request',()=>{
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+accessToken
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body[1].id).to.equal(691782750)
        })
    })
})

