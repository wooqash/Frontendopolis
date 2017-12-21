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
	const showErrors = function(error){
		console.error(error.name, error.message);
	};
	const noItemException = function(id){
		this.message = 'The element with ID: ' + id + ' doesn\'t exists!';
		this.name = 'noItemException: ';
	};
	const invalidMsg = function(msg){
		this.nextElementSibling.textContent = msg || '';
	};
	const showResults = function(val1, val2){
		try{
			// List of test which checks that fileds exists
			if(!results){
				throw new noItemException('Results');
			}
			if(!numb1){
				throw new noItemException('Numb1');
			}
			if(!numb2){
				throw new noItemException('Numb2');
			}
			if(!addition){
				throw new noItemException('ResultOfAdd');
			}
			if(!substraction){
				throw new noItemException('ResultOfSub');
			}
			if(!multiplication){
				throw new noItemException('ResultOfMuli');
			}
			if(!division){
				throw new noItemException('ResultOfDiv');
			}
			if(!restFromDivision){
				throw new noItemException('ResultOfMod');
			}
			
			results.classList.remove('show');
			if(!val1){
				invalidMsg.call(numb1, 'Error: Type a number');
			}
			else{
				invalidMsg.call(numb1);
			}
			
			if(!val2){
				if(val2 !== 0){				
					invalidMsg.call(numb2, 'Error: Type a number');
				}
				else{
					invalidMsg.call(numb2, 'Error: Type a number other than 0');
				}
				return;
			}
			else{
				invalidMsg.call(numb2);
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
				addition.textContent = '';
				substraction.textContent = '';
				multiplication.textContent = '';
				division.textContent = '';
				restFromDivision.textContent = '';
			}
		}
		catch (e) {
			showErrors(e);
		}	
	};
	
	try{
		if(okBtn){
			okBtn.addEventListener('click', function(evt){
				evt.preventDefault();
				var val1 = numb1 ? parseFloat(numb1.value) : null;
				var val2 = numb2 ? parseFloat(numb2.value) : null;

				showResults(val1, val2);
			});
		}
		else{
			throw new noItemException('OkBtn');
		}

		if(randomBtn){
			randomBtn.addEventListener('click', function(evt){
				evt.preventDefault();
				var val1 = calc.random(1,20);
				var val2 = calc.random(1,20);

				numb1.value = val1;
				numb2.value = val2;

				showResults(val1, val2);
			});
		}
		else{
			throw new noItemException('RandomBtn');
		}
	}
	catch (err) {
		showErrors(err);
	}
	
	
})();