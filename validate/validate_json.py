import glob
import json
import os
import argparse

parser = argparse.ArgumentParser(description='Json Validation Parameters')
parser.add_argument('-changed_files', help='Optional: Changed file names')
args = parser.parse_args()

os.chdir(os.path.abspath(__file__ + "/../../lang"))
if args.changed_files is not None:
    files = list()
    for file in args.changed_files.split(","):
        if file.strip().endswith(".json"):
            files.append(file)
else:
    files = glob.glob("*.json")

for file in files:
    with open(file) as f:
        json.load(f)