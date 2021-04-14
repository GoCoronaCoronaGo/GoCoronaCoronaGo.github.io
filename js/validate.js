function latitudeError(latitudeLabel, latitudeStr){
  let errorNode = document.createElement('div');
    errorNode.innerHTML = latitudeStr;
    errorNode.style.color = "red";
    errorNode.style.display = "inline";
    latitudeLabel.appendChild(errorNode);
}

function longitudeError(longitudeLabel, longitudeStr){
  let errorNode = document.createElement('div');
    errorNode.innerHTML = longitudeStr;
    errorNode.style.color = "red";
    errorNode.style.display = "inline";
    longitudeLabel.appendChild(errorNode);
}

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let latitude = document.getElementById('latitudeInp');
  let longitude = document.getElementById('longitudeInp');

  let latitudeLabel = document.getElementById('latitude');
  let longitudeLabel = document.getElementById('longitude');
  if(latitudeLabel.childNodes.length > 2)
  {
    latitudeLabel.removeChild(latitudeLabel.childNodes[2]);
  }
  if(longitudeLabel.childNodes.length > 2)
  {
    longitudeLabel.removeChild(longitudeLabel.childNodes[2]);
  }

  let latitudeStr = " must be a valid Latitude (-90 to 90)";
  let longitudeStr = " must be a valid Longitude (-180 to 180)";
  
  let num1 = latitude.value;
  let num2 = longitude.value;
  if(isNaN(num1))
  {
    latitudeError(latitudeLabel, latitudeStr);
    return false;
  }
  if(num1 <-90 || num1 > 90)
  {
    latitudeError(latitudeLabel, latitudeStr);
    return false;
  }
  if(isNaN(num2))
  {
    longitudeError(longitudeLabel, longitudeStr);
    return false;
  }
  if(num2 <-180 || num2 > 180)
  {
    longitudeError(longitudeLabel, longitudeStr);
    return false;
  }
  let arr = document.getElementById("observationForm").elements;
  console.log(arr);
  console.log('TODO - validate the longitude, latitude values before submitting');
  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
