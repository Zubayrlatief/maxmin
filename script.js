
document.getElementById('numbers').addEventListener('input', function() {
    const input = this.value;
    
    if (input.trim() === '') {
        document.getElementById('result').innerText = 'Min: N/A, Max: N/A';
        return;
    }
    
    const numberArray = input.split(',').map(Number).filter(n => !isNaN(n));
    
    if (numberArray.length === 0) {
        document.getElementById('result').innerText = 'Min: N/A, Max: N/A';
        return;
    }
    
    const min = Math.min(...numberArray);
    const max = Math.max(...numberArray);
    
    document.getElementById('result').innerText = `Min: ${min}, Max: ${max}`;
});