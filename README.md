"# graphQL_learing" 
# mutation{
#   login(email: "vikkeesingh@gmail.com",
#   password: "vikkee@9090"){
#     token
#   }
# }

# mutation{
#   signup(fullName: "Vikkee Singh",
#   email: "vikkeesingh@gmail.com",
#   password: "vikkee@9090",
#   username: "Vikkee-Singh"
#   ){
#     _id
#     username
#     firstName
#     lastName
#     email
#   }
# }

# mutation{
#   updateTweet(_id: "5ab8c7ecb4ab301d4c8fa823",
#     text: "Hello my awesome World..!"){
#     _id
#     text
#   }
# }

# mutation{
#   deleteTweet(_id: "5ab8c982984bb71b6ced1161") {
#     message
#   }
# }


# mutation{
#   createTweet(text: "Hello my awesome World") {
#     _id
#     text
#   }
# }

# {
#   getTweet(_id: "5ab8c2d8213053163485a236") {
#     text
#     _id
#   }
# }

# {
#   getTweets {
#     _id
#     text
#     # createdAt
#     # updatedAt
#   }
# }