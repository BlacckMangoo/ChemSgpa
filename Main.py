

import pandas as pd

df = pd.read_excel('ChemMarks.xlsx')
df.to_json("data.json", orient="records")






