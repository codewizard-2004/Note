import Content from "../models/content.model.js";
import User from "../models/user.model.js";


export const addItemtoUserContents = async(req , res) => {
    try {
        const {userId , title , textarea} = req.body;
        
        const newContent = new Content({title , textarea})
        await newContent.save();

        //FIND THE USER AND ADD THE CONTENT TO THE ARRAY
        await User.findByIdAndUpdate(userId , {
            $push: {contents: newContent._id}
        })

        res.status(201).json({message: "content successfully created",
            content: newContent
        });



        
    } catch (error) {
        console.log("Error in addItemtoUserContents " ,error)
        res.status(500).json({message:"Internal server Error"});
    }
}

export const removeItemfromUserContents = async(req , res) => {
    try {
        const {userId , textId} = req.body;
        const user = await User.findById(userId);
        const updatedContents = user.contents.filter(id => id.toString()!==textId);

        user.contents = updatedContents;
        await user.save();

        res.status(201).json({message:"text successfully removed",
            content: user.contents
        })

        const content_to_be_removed = await Content.findByIdAndDelete(textId)

        await content_to_be_removed.save();


    } catch (error) {
        console.log("Error in removeItemsfromUserContents " ,error)
        res.status(500).json({message:"Internal server Error"});
    }
}

export const updateItemfromContents = async(req , res) => {
    try {
        const {textId , newTitle , newTextarea} = req.body;
        const new_content = await Content.findByIdAndUpdate(textId,
            {title: newTitle , textarea: newTextarea}
        );

        await new_content.save()
        
        res.status(201).json({message:"text successfully updated",
            content: new_content
        })
        
    } catch (error) {
        console.log("Error in updateItemfromContents " ,error)
        res.status(500).json({message:"Internal server Error"});
        
    }
}


export const getContentfromUser = async(req , res) => {
    try {
        const {id:userId} = req.params;
        const user = await User.findById(userId).populate("contents");

        res.status(200).json(user.contents);
    } catch (error) {
        console.log("Error in getContent for user",error);
        res.status(500).json({message:"Internal Server Error"})
        
    }
}