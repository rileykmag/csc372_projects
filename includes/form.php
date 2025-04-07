<?php

// is valid text function, will check if text is within the min and max range
function isValidText($text, $min, $max) {
    $length = strlen($text);
    if($length >= $min && $length <= $max) {
        return true;
    }
    else {
        return false;
    }
}


// is valid number function, will check if number is within the min and max range
function isValidNumber($number, $min, $max) {
    if (!is_numeric($number)) {
        return false;
    }
    if ($number < $min || $number > $max) {
        return false;
    }

    return true;
}


// is valid option function, will check if the value is in the array of options
function isValidOption($value, $options) {
    if(!in_array($value, $options)) {
        return false;
    }else {
        return true;
    }
}

?>