const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const AccordionSchema = new Schema({
    tabs:
        [
            {
                title: String,
                sections:
                    [
                        {
                            image:
                            {
                                source: String,
                                filename: String,
                                url: String,
                            },
                            heading: String,
                            subheading: String,
                            information: String,
                            buttons:
                                [
                                    {
                                        text: String,
                                        url: String,
                                    },
                                ],
                        }
                    ],
            }
        ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});


//-------------------------------POTENTIAL FUTURE SCHEMA--------------------------------
// const AccordionSchema = new Schema({
//     tabs:
//         [
//             {
//                 title: String,
//                 sections:
//                     [
//                         {
//                             images:
//                                 [
//                                     {
//                                         source: String,
//                                         filename: String,
//                                         link: String,
//                                     },
//                                 ],
//                             heading: [String],
//                             subheading: [String],
//                             information: [String],
//                             buttons:
//                                 [
//                                     {
//                                         text: String,
//                                         url: String,
//                                     },
//                                 ],
//                         }
//                     ],
//             }
//         ]
// });


module.exports = mongoose.model('Accordion', AccordionSchema);