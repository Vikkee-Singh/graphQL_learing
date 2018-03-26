import Tweet from "../../models/Tweet"

export default {
    getTweets: ()=>Tweet.find({}).sort({createdAt: -1}),
    getTweet: (_, { _id }) => Tweet.findById(_id),
    createTweet: (_, args) => Tweet.create(args),
    updateTweet: (_, { _id, ...rest}) => Tweet.findByIdAndUpdate(_id, rest, { new: true }),
    deleteTweet: async function(_, {_id}){
        try {
            await Tweet.findByIdAndRemove(_id);
            return {
                message: "Tweet has been deleted successflly."
            }
        } catch (error) {
            throw error;
        }
    } 
}