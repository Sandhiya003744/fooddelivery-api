export const FoodIndex = (req,res) => {
    res.send("Get all the food items");
};

export const FoodCreate=(req,res) => {
    res.send("Prepare a food");
};

export const FoodUpdate=(req, res) => {
    res.send("Add more spices");
};

export const FoodDelete = (req, res) => {
    res.send("Food is finished");
};