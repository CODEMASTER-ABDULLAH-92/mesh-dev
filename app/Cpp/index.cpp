#include<iostream>
using namespace std;
void printArr(int arr[], int length){
    for(int i = 0; i<length; i++){
        cout<<arr[i]<<" ";
    }
}
void insertionSort(int arr[], int length){
    for(int i = 1; i<length; i++){
        for(int j = length; j>=i; j--){
            if (arr[j - 1 ] > arr[j])
            {
                swap(arr[j - 1 ],arr[j]);
            }
        }
    }
}
void bubbleSort(int arr[], int length){
    for(int i =0; i< length; i++){
        for(int j =0; j<length - i -1 ; j++){
            if (arr[j +1] <arr[j])
            {
                swap(arr[j + 1],arr[j]);
            }
        }
    }
}
int main(){
    int arr[] = {92,72,45,32};
    insertionSort(arr,4);
    printArr(arr,4);
    bubbleSort(arr,4);
    printArr(arr,4);
    return 0;
}