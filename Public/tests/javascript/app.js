/**
 * Created by davem on 27/11/2016.
 */
var learnjavascript={};
learnjavascript.showView = function (hash){
    var questionView =$('<div class ="question-view">').text('Arriving Soon!');

};
learnjavascript.showView = function(hash) {
    var routes ={
     '#question-1': learnjavascript.questionView
          };
    var hashParts = hash.split('-');
    var viewFn = routes[hash];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
};
