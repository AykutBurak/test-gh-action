import glob
import csv
import os
import argparse

parser = argparse.ArgumentParser(description='Json Validation Parameters')
parser.add_argument('-changed_files', help='Optional: Changed file names')
args = parser.parse_args()

os.chdir(os.path.abspath(__file__ + "/../../lang"))
if args.changed_files is not None:
    files = list()
    for file in args.changed_files.split(","):
        if file.strip().endswith(".csv"):
            files.append(file)
else:
    files = glob.glob("*.csv")

for file in files:
    with open(file) as f:
        rows = list(csv.reader(f))
        rows = [row for row in rows if len(row) != 2]
        if len(rows) > 0:
            raise Exception(f'{rows} in file: {f.name} ')