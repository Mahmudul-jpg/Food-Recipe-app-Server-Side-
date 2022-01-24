const mongoose = require('mongoose');
const uri = `mongodb+srv://DbUser:01750804481@cluster0.oqljp.mongodb.net/Mealapp?retryWrites=true&w=majority`
//mongodb+srv://DbUser:<password>@cluster0.oqljp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected')
}).catch(error => console.log(error))