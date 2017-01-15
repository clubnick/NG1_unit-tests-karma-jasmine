describe('Filters', function () { //describe your object type
    beforeEach(module('MyApp')); //load module

    describe('reverse OK', function () { //describe your app name
        var reverse;
        beforeEach(inject(function ($filter) { //initialize your filter
            reverse = $filter('reverse', {});
        }));
        it('1.Should reverse a string', function () {  //write tests
            expect(reverse('rahil')).toBe('lihar'); //pass
        });

        it('2.Should reverse a string', function () {  //write tests
            expect(reverse('don')).toBe('nod'); //pass
        });
    });

    describe('reverse NOT OK', function () { //describe your app name
        var reverse;
        beforeEach(inject(function ($filter) { //initialize your filter
            reverse = $filter('reverse', {});
        }));

        it('3.Should reverse a string', function () {  //write tests
            expect(reverse('jam')).toBe('maj'); // pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        });
    });

});