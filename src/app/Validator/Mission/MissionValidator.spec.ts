import { FormControl, FormBuilder, Validators } from "@angular/forms";
import { isWeekEnd, isGoodDateDebutValidator } from './MissionValidator'

describe('MissionValidator', () => {
    it('should not be a weekend on Monday', function(){
        let fb: FormBuilder = new FormBuilder();
        let dateTest: FormControl = fb.control('');
        dateTest.setValue("22-01-2024");

        expect(!isWeekEnd(dateTest));
    });

    it('should be on a weekend', function(){
        let fb: FormBuilder = new FormBuilder();
        let dateTest: FormControl = fb.control('');
        dateTest.setValue("21-01-2024");

        expect(isWeekEnd(dateTest));
    });

    it('should be a date in the past', function(){
        let fb: FormBuilder = new FormBuilder();
        let dateTest: FormControl = fb.control('', [Validators.required, isGoodDateDebutValidator]);
        dateTest.setValue("18-06-2018");

        expect(!isWeekEnd(dateTest));
    });
});