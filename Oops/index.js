// console.log("Oops!");

// Factory Function
function createCircle(radius) {
    return {
         radius,
         draw: function () {
             console.log('draw');
         }
    };
}

// const circle = createCircle(6)
//circle.draw();

// Constructor Function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    // this.getDefaultLocation = function () {
    //     return defaultLocation;
    // }

    this.draw = function () {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
       set: function (value) {
            if (!value.x || !value.y)
                throw new Error('The default location must be a number');

            defaultLocation = value;
       }
    });
}
const circle = new Circle(10);
circle.defaultLocation = 1;