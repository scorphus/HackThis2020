## NOTES
- PYTHONHASHSEED=0 needs to be set in your environment

## To install:

- Set up and activate the virtual environment. One way to do this is with the following command:

```bash
python3 -m venv venv
. venv/bin/activate
```

- Install all of the necessary packages. There should be some already in the `requirements.txt` file. Inside of the virtual environment, install them using the following command:

```bash
pip install -r requirements.txt
```

If your installation of pip does not use Python 3, then use pip3 instead of pip, like so:

```bash
pip3 install -r requirements.txt
```

## Deactivating the virtual environment

Use the deactivate command, like so:
```bash
deactivate
```

## Adding more packages

Use pip (or pip3, if your installation of pip does not use Python3) to install the packages.

```bash
pip install PACKAGE_NAME_HERE
```

Afterwards, add all of the packages you just installed using `pip freeze`, like so:

```bash
pip freeze > requirements.txt
```
