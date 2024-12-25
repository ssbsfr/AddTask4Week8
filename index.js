// Дополнительное задание 4 Неделя 8

function isPalindrome(str) {
    // Приводим строку к одному регистру и убираем лишние пробелы
    const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
    // Сравниваем строку с её перевёрнутой версией
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Пример использования
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('programmer')); // false
console.log(isPalindrome('топот')); // true
