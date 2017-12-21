'use strict';

(function(){
	const numb1 = document.getElementById('Numb1');
	const numb2 = document.getElementById('Numb2');
	const okBtn = document.getElementById('OkBtn');
	const randomBtn = document.getElementById('RandomBtn');
	const results = document.getElementById('Results');
	const addition = document.getElementById('ResultOfAdd');
	const substraction = document.getElementById('ResultOfSub');
	const multiplication = document.getElementById('ResultOfMuli');
	const division = document.getElementById('ResultOfDiv');
	const restFromDivision = document.getElementById('ResultOfMod');
	
	const calc = (function(){
		const addition = function(numb1, numb2){
			return numb1 + numb2;
		};
		const substraction = function(numb1, numb2){
			return numb1 - numb2;
		};
		const multiply = function(numb1, numb2){
			return numb1 * numb2;
		};
		const division = function(numb1, numb2){
			if(numb2 === 0){
				return 'Can\'t divide by zero';
			}
			return numb1 / numb2;
		};
		const restFromDivision = function(numb1, numb2){
			if(numb2 === 0){
				return 'Can\'t divide by zero';
			}
			return numb1 % numb2;
		};
		const random = function(minVal, maxVal){
			let min = minVal || 1;
			let max = maxVal || 20;
			return Math.floor(Math.random() * max) + min;	
		};

		return {
			add: addition,
			sub: substraction,
			multi: multiply,
			div: division,
			mod: restFromDivision,
			random: random
		};
	})();
	const showResults = function(val1, val2){
		results.classList.remove('show');
		if(!val1){
			numb1.nextElementSibling.textContent = 'Error: Type a number';
		}
		else{
			numb1.nextElementSibling.textContent = '';
		}
		if(!val2){
			if(val2 !== 0){				
				numb2.nextElementSibling.textContent = 'Error: Type a number';
			}
			else{
				numb2.nextElementSibling.textContent = 'Error: Type a number other than 0';
			}
			return;
		}
		else{
			numb2.nextElementSibling.textContent = '';
		}
		
		if(typeof(val1) === 'number' && typeof(val2) === 'number'){
			results.classList.add('show');
			addition.textContent = calc.add(val1, val2);
			substraction.textContent = calc.sub(val1, val2);
			multiplication.textContent = calc.multi(val1, val2);
			division.textContent = calc.div(val1, val2);
			restFromDivision.textContent = calc.mod(val1, val2);
		}
		else{
//			results.classList.remove('show');
			addition.textContent = '';
			substraction.textContent = '';
			multiplication.textContent = '';
			division.textContent = '';
			restFromDivision.textContent = '';
		}
	};
	
	okBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		var val1 = parseFloat(numb1.value);
		var val2 = parseFloat(numb2.value);
				
		showResults(val1, val2);
	});
	randomBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		var val1 = calc.random(1,20);
		var val2 = calc.random(1,20);
		
		numb1.value = val1;
		numb2.value = val2;

		showResults(val1, val2);
	});
})();