# C

C is a Structured Language, normally used for software applications, drivers, computers, to make fast math operations and for embeded systems.

It was created by Denis Ritchie who developed it from 1972 to 1973, he wanted a comprehensible language. C is compiled which also makes it an intermediate level language, it helps us forget about some basic hardware management, but we will still need to think about memory management.

It is a general purpose language which means that it was not created for an specific usage, but can be used to solve any kind of problems with code.

- Intermediate Level Language
- Strongly typed.
- Structured.

\*\* It is commonly used for malware because it allows access to some hardware components.

\*\* C is really good to better understand computer theory fundamentals.

# Contents

1. [Installing](#installing-c-for-linux)
2. [Structure](#usual-structure)
3. [Types](#data-types)
4. [Variables](#variable-declaration)
5. [Flow Control](#flow-control-in-c)
6. [Functions](#functions-in-c)
7. [Libraries](#main-c-libraries)

### Installing C for Linux

```bash
# Install C compiler
sudo apt install gcc

# Check version
gcc --version

# Compile C file to machine code
gcc file.c
```

### Usual Structure

```c
#include <stdio.h>

int main() {
	printf("Hello World");
	return 0;
};
```

# Data Types

### **Arithmetic**

`int` 4 Bytes `-2,147,483,648` to `2,147,483,647`.

`unsigned int` 4 Bytes `0` to `4,294,967,295`.

`short` 2 Bytes `-32,768` to `32,767`.

`unsigned short` 2 Bytes `0` to `65,535`.

`long` 8 Bytes `-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807`.

### Floating Points

`float` 4 Bytes `1.2E-38` to `3.4E+38` → 6 decimal places.

`double` 8 Bytes `2.3E-308` to `1.7E+308` → 15 decimal places.

`long double` 10 Bytes `3.4E-4932` to `1.1E+4932` → 19 decimal places.

### Void

`void` specifies that there is no value available, it is used in 3 cases:

- A function that returns a `void` data type.
- A function has a `void` type argument.
- Pointer that points to an object physical memory slot and does not care about the the data type of the object.

### Enum

```c
#include <stdio.h>

enum weekDays {
	Sundary,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
};

int main() {
	enum weekDays today;
	today = Sunday;
	printf("Day %d", today + 1);
	return 0;
};
```

### Char

`char` 1 Byte `-128` to `127`.

`unsigned char` 1 Byte `0` to `255`.

# Variable Declaration

```c
#include <stdio.h>

// Variables
int a, b, c;
float f, g, h;

int main() {
	a = 1;
	b = 34;

	c = a + b;
	printf("Value of sum is %d", c);
	return 0;
};

---------------------------------------------------------------
// Advanced
#include <stdio.h>

// Variables
// Variable comes from an external file
extern int a, b, c;
float f, g, h;

int main() {
	// We have to redeclare external variables
	int a, b, c;

	a = 1;
	b = 34;

	c = a + b;
	printf("Value of sum is %d", c);
	return 0;
};

---------------------------------------------------------------
// Declaring constant variables
const int hotDogCost = 100;
const float tax = 17.5;
const char newLine = '\n';
```

### Using Define Directive

```c
#include <stdio.h>

// Define is used for constant variables too
#define PIZZACOST 1.5
const char NEWLINE = '\n';

int main() {
	float totalBill;
	float amount = 4;

	totalBill = PIZZACOST * amount;
	printf("Total Bill: %c %f", NEWLINE, totalBill);
	return 0;
};
```

# Flow Control in C

### If Statement

```c
if(condition1) {
	// Statement to execute when the first condition is met
} else if (condition2) {
	// Statement to execute when the second condition is met
} else {
	// Statement to execute when no condition is met
};

----------------------------------------------------------
// Also can be written as

if(condition1)
	// Statements
else if(condition2)
	// Statement to execute when the second condition is met
else
	// Statement to execute when no condition is met
```

### Switch Statement

```c
switch(variable) {
	case 1:
		// Statement to execute when variable equals 1
		break;
	case 2:
		// Statement to execute when variable equals 2
		break;
	case 3:
		// Statement to execute when variable equals 3
		break;
	default:
		// Statement to execute when no condition is met
		break;
};
```

### While Statement

```c
while(condition) {
	// Statement to execute while condition is met
};
```

### Do-While Statement

```c
do {
	// Statement to execute at least once and while the condition is met
} while(condition);
```

### For Statement

```c
for(i = 0; i < n; i++) {
	printf("The current value of i is %d \n", i);
}
```

### Break Expression

It is used to break loops, conditions or scape a code block.

```c
while(condition1) {
	// Statement to execute while condition1 is met
	if(condition2) {
		// When condition2 is met scape while loop
		break;
	}
};
```

### Continue Expression

Forces a new iteration in a loop, only works for while, do-while and for loops.

```c
for(i = 0; i < n; i++) {
	continue;
	// The next line will never execute because the continue expression forces
	// the next loop iteration without finishing the current iteration.
	printf("The current value of i is %d \n", i);
}
```

### Go To Expression

Jumps to an specific line of code. This structure brings many maintainability problems, and is recommended to not use it.

```c
if(panic) {
	goto errorHandler;
}

errorHandler: // Code to fix your disaster
```

# Functions in C

A Function is a piece of code that does an specific task. This task can be called in many occasions in our code without the need to repeat code.

Elements:

- The return: Must correspond to an specific type and is the value returned by the function. In the case the function doesn’t return a value it should return null.
- Function name: is the identifier of the function that we will use to call it.
- The arguments: can be void or could have a specific type.

```c
#include <stdio.h>

// Declare the function, it tells the compiler that the function exists
int power(int base, int n);

int main() {
	int i;

	for(i = 0; i < 10; i++) {
		printf("n = %d result of the power = %d\n", i, power(2,i));
	}

	return 0;
}

// Define the function, it provides the logic of the function
int power(int base, int n) {
	int i, p;
	p = 1;
	for(i = 1; i <= n; i++) {
		p = p * base;
	}

	return p;
}
```

### Return types for functions

```c
// Functions with no arguments nor return values
void functionName();

functionName();

void functionName() {
	// logic
}

// Functions with arguments but no return value
void functionName(float number);

functionName(float number);

void functionName(float number) {
	// logic
}

// Functions with no arguments but with return value
float functionName();

float functionName() {
	// logic
}

// Functions with arguments and return value
float functionName(float number, int n) {
	//logic
}
```

\*\* When we pass a value to a function what happens is that we create a copy of the variable, so the changes inside the function won’t affect the variables that are outside, this is the scope limit.

# Main C Libraries

```c
// Standard Input-Output
#include <stdio.h>

// Console Input-Output
#include <conio.h>

// To work with Strings
#include <string.h>

// Standard Library - To communicate with the outer system and convert data types
#include <stdlib.h>

// Math operations
#include <math.h>

// Handles system time and dates
#include <time.h>

// Character types management
#include <ctype.h>

// Get information (signals) from outside, like keyboard events
#include <signal.h>

// Date Format, Currency Symbol, etc.
#include <locale.h>

// Error management
#include <errno.h>

// Provides a macro to verify assumptions
#include <assert.h>
```

## Math.h

Include more complex math operations than just arithmetic operators (+, -, \*, /).

```c
#include <stdio.h>
#include <math.h>

int x;
float resultSin, resultCos;

int main() {
	printf("Provide a value for x: ");
	scanf("%d", &x);

	resultSin = sin(x);
	resultCos = cos(x);
	printf("The value provided is: %d \n", x);
	printf("The value of the sin of x is: %f \n", resultSin);
	printf("The value of the cos of x is: %f \n", resultCos);

	return 0;
}
```

## String.h

Manipulates strings.

```c
#include <stdio.h>
#include <string.h>

char string1[60];

int main() {
	printf("Write a phrase\n");
	gets(string1);

	// String reverse
	strrev(string1);
	printf("The reversed string is: %s\n", string1);

	return 0;
}

--------------------------------------------------------

#include <stdio.h>
#include <string.h>

char string1[60];
char string2[60];

int main() {
	printf("Write a phrase\n");
	gets(string1);
	printf("Write a phrase to compare\n");
	gets(string2);

	// Compare strings
	if(strcmp(string1, string2) == 0) {
		printf("Strings are identical\n");
	} else {
		// Concatenate strings
		strcat(string1, string2);
		printf("Strings are different, if we combine them the result is: %s \n", string1);
	}

	return 0;
}
```

## Time.h

```c
#include <stdio.h>
#include <time.h>

time_t seconds;

int main() {
	seconds = time(NULL);
	printf("The amount of hours wince EPOCH Januray 1st of 1970 at 00:00 is: %ld \n", seconds / 3600);
	return 0;
}

--------------------------------------------------------

#include <stdio.h>
#include <time.h>

time_t begin, end;
long i;

int main() {
	begin = time(NULL);

	// Lets waste time
	for(i = 0; i < 600000000; i++);

	end = time(NULL);
	printf("The amount of our for loop took is: %f \n", difftime(end, begin));
	return 0;
}
```

## Stdlib.h

Communicates with the system.

```c
#include <stdio.h>
#include <stdlib.h>

int a[12], n, i;

int main() {
	// Clear terminal
	system("cls");
	system("color 9F");
	printf("Provide a decimal value\n");
	scanf("%d", &n);
	printf("You are converting the number %d to binary.\n", n);

	for(i = 0; n > 0; i++) {
		a[i] = n%2;
		n = n/2;
	}

	printf("The result is: ");
	for(i = i - 1; i >= 0; i--) {
		printf("%d", a[i]);
	}

	return 0;
}
```
