describe('Chaining Request E2E Scenario',()=>{
    it('Getting all the posts',()=>{
cy.request({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/posts'

}).then(response => {
    expect(response.status).to.eq(200)
    const postId = response.body[0].id
    return postId;
}).then(postid => cy.request({
    method:'GET',
    url:`https://jsonplaceholder.typicode.com/comments?postId=${postid}`,
})).then(response =>{
    expect(response.status).to.eq(200)
    expect(response.body).to.have.length(5)
})
    })

    
})
