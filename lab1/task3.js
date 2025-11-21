/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const memo = new Map();
    
    function getRowRecursive(k) {
        // Проверяем в кеше
        if (memo.has(k)) return memo.get(k);
        
        // Базовые случаи
        if (k === 0) return [1];
        if (k === 1) return [1, 1];
        
        // Рекурсивный вызов
        const prevRow = getRowRecursive(k - 1);
        const newRow = [1];
        
        for (let i = 1; i < k; i++) {
            newRow.push(prevRow[i - 1] + prevRow[i]);
        }
        
        newRow.push(1);
        
        // Сохраняем в кеш
        memo.set(k, newRow);
        return newRow;
    }
    
    return getRowRecursive(rowIndex);
};