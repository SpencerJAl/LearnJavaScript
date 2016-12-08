/**
 * Created by davem on 27/11/2016.
 */

describe('LearnJavascript', function(){
    it('can show question view', function(){
        learnjavascript.showView('#question-1');
        expect($('.viewcontainer.question-view').length).toEqual(1);

    });
    it('shows the landing page when view when their is not hash',removeFunctionWithId(){
      expect($('.view-container .landing-view').length).toEqual(1);
    });
    it('passes the hash view parameter to the view function',function(){
        spyOn(learnjavascript,'questionView');
        learnjavascript.showView('#question-42');
        expect(learnjavascript.questionView().toHaveBeenCalledWith('42'));
    })
});
