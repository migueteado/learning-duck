# Bash

# Contents

1. [Routes Descriptors](#routes-descriptors)
2. [Keyboard Shortcuts](#keyboard-shortcuts)
3. [Command](#command)
4. [Directory Operations](#directory-operations)
5. [LS Operations](#ls-operations)
6. [Files / Directory Manipulation](#files--directory-manipulation)
7. [Text File Manipulation](#text-file-manipulation)
8. [Command Exploration and Help](#command-exploration-and-help)
9. [Wildcards](#wildcards)
10. [Redirections Input/Output and Control Operators](#redirections-inputoutput-and-control-operators)
11. [File Types](#file-types)
12. [Permissions and User Management](#permissions-and-users-management)
13. [Environment Variables](#environment-variables)
14. [Search Commands](#search-commands)
15. [Network Utilities](#network-utilities)
16. [Compressing Files](#compressing-files)
17. [Uncompressing Files](#uncompressing-files)
18. [Execute commands within commands](#execute-commands-within-commands)
19. [Process Management](#process-management)

# Routes Descriptors

```bash
# Root
/

# Current Directory
.

# Upper directory
..

# Home User directory
~
```

# Keyboard Shortcuts

`CTRL+C` Kills current command process.

`CRTL+D` Kills the input command.

`CTRL+A` Jumps to the line start.

`CTRL+E` Jumps to the line end.

`CTRL+L` Cleans terminal screen.

# Command

A command is a message sent to the computer that produces a response from the system and acts as an order. It tells the computer that it should execute an action accordingly to the instruction sent.

Every operative system has an specific collection of basic commands that allow us to execute simple tasks directly.

## A command may mean four different things

1. An executable program.
2. A utility shell command. It is also a program that may include some additional functions. Like `cd`.
3. A shell function. Like `mkdir`.
4. An alias. Like `ls`.

```bash
# Shows a calendar
cal
```

# Directory Operations

```bash
# Prints current directory (Print Working Directory)
pwd

# Creates a directory with a given name dir1 (Make Directory)
mkdir dir1

# Changes current directory to dir1 (Change Directory)
cd dir1

# Changes current directory to 2 directories up
cd ../..

# Changes current directory to user's home
cd

# List files and directories (List)
ls

# Shows all nested files and directories inside the route to any deep
tree /route

# Shows all nested files and directories to up to 2 levels deep
tree -L 2
```

# LS Operations

```bash
# Shows everything including hidden files
ls -a

# Shows the list recursivelly
ls -R

# Shows reverse list
ls -r

# Shows latest modified
ls -t

# Shows sorted by size
ls -S

# Shows using long format
ls -l

# Shows with a human readable format
ls -lh
```

# Files / Directory Manipulation

```bash
# Creates a new file named newFile
touch newFile

# Shows myFile properties
file myFile

# Copies file file1 to the destiny route
cp file1 /destiny

# Copies the directory dir1 and its contents to a new directory named dir1_cp
cp -r dir1 dir1_cp

# Moves file file1 to the destiny route
mv file1 /destiny

# Renames file1 to ok_file
mv file1 ok_file

# Removes file file1
rm file1

# Removes the directory dir1 and is contents interactivelly
rm -ri dir1

# Removes the directory dir1 and is contents directly
rm -r dir1

# Creates symbolic link to file
ln -s file link_name

# Opens a file with its predefined program (MacOS)
open filename

# Opens a file with its predefined program (most linux systems)
xdg-open filename
```

# Text File Manipulation

```bash
# Shows the first 10 lines of text of file.txt
head file.txt

# Shows the first 20 lines of text of file.txt
head -n 20 file.txt

# Shows the last 10 lines of text of file.text
tail file.txt

# Shows the last 20 lines of text of file.txt
tail -n 20 file.txt

# Explores the file with pagination
less file.txt

# Concatenates the content of file1 and fil2 to the terminal output
cat file1 file2
```

# Command exploration and help

```bash
# Shows the type of command
type command

# Shows the user manual for the command
man command

# Shows the help menu for the command
help command

# Shows the route where the executable file of the command is
which command

# Briefly shows the function of the command
whatis command

# Creates an alias for the command
alias aliasname="command"

# Creates an alias for the ls command with options called l
alias l="ls -la"
```

# Wildcards

- `*` Matches any character
- `?` Matches any individual character
- `[characters]` Matches any character that is part of the group of characters.
- `[!characters]` Matches any character that is not part of the group of characters.
- `[[:class:]]` Matches any character of the class.
- `[:alnum:]` Matches any alphanumeric character.
- `[:alpha:]` Matches any alphabetic character.
- `[:digit:]` Matches any number.
- `[:lower:]` Matches any lowercase character.
- `[:upper:]` Matches any uppercase character.

# Redirections Input/Output and control operators

```bash
# Redirects input of a command to a file
command < file

# Redirects output of a command to a file (Use carefully because it overrides the system)
command > file

# Concatenates the output of a command to a file. If the file doesn't exists it creates it
command >> file

# Redirects the error output of a command to the file error.txt
command 2> error.txt

# Redirects the output of command1 to the input of command2
command1 | command2

# Executes consecutivelly
command1; command2

# Executes asynchronouslly
command1 & command2

# Executes command2 if and only if command1 was succesfully executed
command1 && command2

#Executes command1 or command2
command1 || command2
```

### Pipe operator

```bash
# List files and directories inside Pictures directory with long human readable format
# Sorts the list in order
# Writes to standard output and to file pictures.txt
# Reads the output file
ls -lh Pictures | sort | tee pictures.txt | less
```

# File Types

<table>
  <thead>
    <tr>
      <th>
        Attribute
      </th>
      <th>
        File Type
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        -
      </td>
      <td>
        Regular File
      </td>
    </tr>
    <tr>
      <td>
        d
      </td>
      <td>
        Directory
      <td>
    </tr>
    <tr>
      <td>
        l
      </td>
      <td>
        Symbolic Link
      </td>
    </tr>
    <tr>
      <td>
        b
      </td>
      <td>
        Special Block File. Those are files that manage the information of data blocks like a USB drive.
      </td>
    </tr>
  </tbody>
</table>

# Permissions and Users Management

### Mode type

<table>
  <tr>
    <th>
      Owner
    </th>
    <td>
      rwx
    </td>
    <td>
      111
    </td>
  </tr>
  <tr>
    <th>
      Group
    </th>
    <td>
      r-x
    </td>
    <td>
      101
    </td>
  </tr>
  <tr>
    <th>
      Group
    </th>
    <td>
      r-x
    </td>
    <td>
      101
    </td>
  </tr>
</table>

\*\* r (Read), w (Write), x (Execute).

### Octal Mode

<table>
  <tr>
    <th>
      Octal
    </th>
    <th>
      Binary
    </th>
    <th>
      Permissions
    </th>
  </tr>
  <tr>
    <td>
      0
    </td>
    <td>
      000
    </td>
    <td>
      ---
    </td>
  </tr>
  <tr>
    <td>
      1
    </td>
    <td>
      001
    </td>
    <td>
      --x
    </td>
  </tr>
  <tr>
    <td>
      2
    </td>
    <td>
      010
    </td>
    <td>
      -w-
    </td>
  </tr>
  <tr>
    <td>
      3
    </td>
    <td>
      011
    </td>
    <td>
      -wx
    </td>
  </tr>
  <tr>
    <td>
      4
    </td>
    <td>
      100
    </td>
    <td>
      r--
    </td>
  </tr>
  <tr>
    <td>
      5
    </td>
    <td>
      101
    </td>
    <td>
      r-x
    </td>
  </tr>
  <tr>
    <td>
      6
    </td>
    <td>
      110
    </td>
    <td>
      rw-
    </td>
  </tr>
  <tr>
    <td>
      7
    </td>
    <td>
      111
    </td>
    <td>
      rwx
    </td>
  </tr>
</table>

### Symbolic Mode

<table>
  <tr>
    <th>
      Symbol
    </th>
    <th>
      Meaning
    </th>
  </tr>
  <tr>
    <td>
      u
    </td>
    <td>
      Only for the user
    </td>
  </tr>
  <tr>
    <td>
      g
    </td>
    <td>
      Only for the group
    </td>
  </tr>
  <tr>
    <td>
      o
    </td>
    <td>
      Only for other (the world)
    </td>
  </tr>
  <tr>
    <td>
      a
    </td>
    <td>
      Applies for All
    </td>
  </tr>
</table>

```bash
# Changes the permissions of mytext to 755 (Change Mode)
# Ownser - Read, Write, Execute
# Group - Read, Execute
# World - Read, Execute
chmod 755 mytext

# Removes the read permission from mytext
chmod u-r mytext

# Adds read, write and execution permission to the user and only read to the group and the world
chmod u=rwx,go=r mytext

# Changes Ownership of a folder and all its files and subdirectories
chown -R <user>:<group> folder
chown -R soymvillalobos:soymvillalobos MyProjects

# Shows user ID
id

# Shows the name of logged in user
whoami
chown -R $(whoami):$(whoami) MyProjects

# Changes to another user (Switch User)
su username

# Executes command as superuser
sudo command
```

# Environment Variables

```bash
# Prints current environment variables
env

# Prints the environment variable VAR
echo $VAR

# Environment variables with the executable paths
$PATH

# User home sirectory
$HOME

# Assigns the value val to the variable $VAR
export $VAR=val
```

# Search Commands

```bash
# Search in a route using a filename
find <route> -name <filename>

# Search a file using the name filename in the current directory
find . -name <filename>

# Search inside a file or terminal output using regular expressions
grep <regex> file

# Looks for the word hello ignoring lowercase and uppercase
grep -i hello message.txt
```

# Network Utilities

```bash
# Shows Network information
ifconfig

# Checks resource availability
ping ip_domain

# Checks resource availability using IP or domain and shows in the terminal
curl ip_domain

# Downloads a resource using IP address or domain
wget ip_domain

# Shows the package route to an IP address or domain
traceroute ip_domain

# Shows network interfaces and their states
netstat -i
```

# Compressing files

```bash
tar -czvf <name>.tar.gz <directory_name>

# Example
tar -czvf myFiles.tar.gz Documents
```

# Uncompressing Files

```bash
tar -xzvf <name>.tar.gz <directory_name>

# Example
tar -xzvf myFiles.tar.gz Documents
```

# Execute commands within commands

```bash
cat $(find ~/Desktop -name test.txt)
```

# Process Management

```bash
# Processes and commands runnin in our bash
ps

# Terminates a process
kill <process_id>

# Shows a table with the processes that are using most resources
top
```
