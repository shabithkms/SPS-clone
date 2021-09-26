$(document).ready(function () {

    $('form[id="form"]').validate({ 
        rules: {
            'name': {
                required: true,
                minlength: 5
            },
            'email': {
                required: true,
                email: true
            },
            'place':{
                required:true
            },
            'gender':{
                required:true
            },
            'number':{
                required:true
            },
            'employment':{
                required:true
            },
            'qualification':{
                required:true
            },
            'college':{
                required:true
            },
            'graduation':{
                required:true
            },
            'bio':{
                required:true
            },
            'joinSps':{
                required:true
            },
            'motive':{
                required:true
            },
            'learnSps':{
                required:true
            },
            'agree':{
                required:true
            }

        }
    });

});