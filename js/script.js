		setTimeOut(function () {
          location.href = 'rocket.html';
		}, 2000);

		// this function does this.
		var doCoolStuff = function () {
            // changing class name / wapis se 
            var currentClassName = document.getElementById('cool').className;

            if (currentClassName == 'cool') {document.getElementById('cool').className = 'cool red'}

            else {document.getElementById('cool').className = 'cool';}
		}
		var sayMyname = function (name) {
			alert ('My name is: '+name);
		}

		var car = {
			make: 'VW',
			type: 'polo',
			color: 'green',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
				'seat 1',
				'seat 2',
				'seat 3',
				'seat 4',
			],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car '+isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				}
				else {
					this.isTurnedOn = false;
				}
			}

		};

		console.log('Helloo jeee Khushaamdeed');