import json
import pandas as pd

# 1. Get the unique names from your new data tables
df_a = pd.read_csv('Results_1.csv')  # Replace with your actual file path
df_b = pd.read_csv('Results_2.csv')  # Replace with your actual file path

new_dataset_names = set(df_a['GRB_Name']).union(set(df_b['GRB_Name']))
print(f"Total Unique in New Tables: {len(new_dataset_names)}") # Should be 943

# 2. Load the names from your old stored JSON file
with open('pulse_shape.json', 'r') as f:
    json_data = json.load(f)

# If your JSON is a list of dicts: [{"name": "GRB..."}, ...]
# If your JSON uses names as keys: {"GRB...": {...}} -> use set(json_data.keys())
old_json_names = set(item['Burst_Name'] for item in json_data)
print(f"Total Unique in Old JSON: {len(old_json_names)}")

# 3. Perform the comparison math
actually_new_grbs = new_dataset_names.difference(old_json_names)
matching_grbs = new_dataset_names.intersection(old_json_names)
missing_old_grbs = old_json_names.difference(new_dataset_names)

# 4. Print the Audit Report
print("\n=== DATA AUDIT REPORT ===")
print(f"🔹 Expected New GRBs: 81")
print(f"🔹 Found New GRBs: {len(actually_new_grbs)}")
print(f"🔹 GRBs successfully retained from old JSON: {len(matching_grbs)}")
print(f"❌ Old GRBs completely MISSING from new tables: {len(missing_old_grbs)}")

# Optional: Print lists to investigate anomalies
if len(actually_new_grbs) != 81:
    print(f"\nInvestigate - Here are some discovered 'new' GRBs: {list(actually_new_grbs)[:5]}")
if len(missing_old_grbs) > 0:
    print(f"Investigate - Here are some 'missing' old GRBs: {list(missing_old_grbs)[:5]}")
