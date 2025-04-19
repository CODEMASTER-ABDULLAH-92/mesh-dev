import Code from '@/component/Code'
import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`e<iostream>
#include<cmath>  // Include cmath for sqrt function
using namespace std;

int findPrime(int length){
    if(length <= 1) return -1;  // 0 and 1 are not prime numbers
    if(length == 2) return 1;   // 2 is the only even prime number
    for(int i = 2; i <= sqrt(length); i++){  // Check divisors up to sqrt(length)
        if (length % i == 0) {
            return -1;  // Not a prime number
        }
    }
    return 1;  // Prime number
}

int main(){   
    cout << "Enter The Number: ";
    int number;
    cin >> number;
    int res = findPrime(number);
    if (res == 1) {
        cout << number << " is a prime number." << endl;
    } else {
        cout << number << " is not a prime number." << endl;
    }
    return 0;
}`} heading={`Prime Number`}/>
    </div>
  )
}

export default page
