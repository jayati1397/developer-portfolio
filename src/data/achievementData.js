import aws from '../assets/images/certificates/aws.png'
import solo from '../assets/images/certificates/solo.png'
import stanford from '../assets/images/certificates/stanford.png'
import udemy from '../assets/images/certificates/udemy.png'

export const achievementData = {
    bio : "",
    achievements : [
        {
            id : 5,
            title : 'AWS Certified Solutions Architect – Associate',
            details : 'AWS',
            date : 'May, 2021',
            field : 'Cloud',
            image : aws
        },
        {
            id : 1,
            title : 'Supervised Machine Learning: Regression and Classification ',
            details : 'Stanford University',
            date : 'Feb, 2025',
            field : 'Machine Learning',
            image : stanford
        },
        {
            id : 2,
            title : 'ML for beginners',
            details : 'Sololearn',
            date : 'Nov, 2024',
            field : 'Machine Learning',
            image : solo
        },
        {
            id : 3,
            title : 'Agile Crash Course: Agile Project Management; Agile Delivery',
            details : 'Udemy',
            date : 'Sept, 2021',
            field : 'Project Management',
            image : udemy
        },
        {
            id : 4,
            title : 'Python for Finance: Investment fundamentals and Data Analysis',
            details : 'Udemy',
            date : 'Sept, 2021',
            field : 'Project Management',
            image : udemy
        }
    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/