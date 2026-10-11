import pandas as pd

res1 = pd.read_csv("Results_1.csv")
res1stripped = res1.iloc[1:, 1:]
res1json = res1stripped.to_json(orient='records', indent=4)
res1stripped.to_json("Results_1_JSON.json", orient='records', indent=4)

res2 = pd.read_csv("Results_2.csv")
res2stripped = res2.iloc[1:, 1:]
res2json = res2stripped.to_json(orient='records', indent=4)
res2stripped.to_json("Results_2_JSON.json", orient='records', indent=4)

combined_res = pd.concat([res1stripped, res2stripped], ignore_index=True)

combined_res.to_json('combined_results.json', index=False, indent=4, orient='records') 