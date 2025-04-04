let num = 15;

// numが３と５の倍数なら’３と５の倍数です’と出力する
if(num % 3 === 0 && num % 5 === 0){
  console.log('３と５の倍数です');
}

// numが３の倍数なら’３の倍数です’と出力する
else if(num % 3 === 0){
  console.log('３の倍数です');
}

// numが５の倍数なら’５の倍数です’と出力する
else if(num % 5 === 0){
  console.log('５の倍数です');
}

// それ以外なら変数numを出力する
else{
  console.log(num);
}