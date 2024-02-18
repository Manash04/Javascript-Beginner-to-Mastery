#include <iostream>
using namespace std;

int main() {
    int n;

    cout << "Enter the size of the array: ";
    cin >> n;

    int arr[n];  
    cout << "Enter the elements of the array:" << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    cout << "The even values of the arrays are:" << endl;
    for (int i = 0; i < n; i++) {
        if(arr[i]%2 == 0){
        cout << arr[i] << " ";

        }
    }

    return 0;
}
