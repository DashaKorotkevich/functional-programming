var jump = function(nums) {
    const n = nums.length;
    if (n <= 1) return 0;
    
    let jumps = 0;
    let currentMax = 0;  // максимальная позиция, которую можем достичь текущими прыжками
    let nextMax = 0;     // максимальная позиция, которую можем достичь следующим прыжком
    
    for (let i = 0; i < n - 1; i++) {
        // Обновляем максимальную достижимую позицию для следующего прыжка
        nextMax = Math.max(nextMax, i + nums[i]);
        
        // Если дошли до границы текущего "прыжкового диапазона"
        if (i === currentMax) {
            jumps++;
            currentMax = nextMax;
            
            // Если уже можем достичь конца
            if (currentMax >= n - 1) {
                break;
            }
        }
    }
    
    return jumps;
};