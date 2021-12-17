import {ElementsMenu} from "./elements-library/ElementsMenu.js";
import {toggleShow as toggleShowElementsMenu} from "./elements-library/animation.js";

import * as canvas from "./canvas/Canvas.js"
import {setImage as setCanvasImage} from "./canvas/setImage.js";

import {AttributeEditor} from "./attribute-editor/AttributeEditor.js"
import {SizeSlider} from "./attribute-editor/ElementSizeSlider.js"

import {BottomMenu} from "./buttons/BottomMenu.js";
import {getLocationId} from "./utils/getLocationId.js";


// Loads element-library with elements, and sets click events on each element to show them on canvas
ElementsMenu.loadElements(element => {
    canvas.addElement(element)
    toggleShowElementsMenu()  // hide menu when an user adds element
})

setCanvasImage() // Sets the canvas image

AttributeEditor() // Initializes the attribute-editor menu
SizeSlider(canvas.imageWidth) // Initializes size-slider

BottomMenu() // Initializes buttons of bottom menu
