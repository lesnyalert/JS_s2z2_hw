let fibo = (n) => {
    let a = [0, 1];
    let b = 0;
    let c = 1;
    let d;
    if (n < 0) {
      return "Insert Parameters > 0 for fibonacci series to start."
    } else if (n < 2) {
      return a[n];
    } else {
    for (let i = 2; i < n; i++) {
      d = b + c;
      b = c;
      c = d;
      a.push(d);
    } return a.join(" ");
    }
  };
  
  console.log(fibo(7));
  console.log(fibo(1));
  console.log(fibo(0));
  console.log(fibo(2));
  console.log(fibo(3));