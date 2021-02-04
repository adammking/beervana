
\COPY breweries FROM 'C:\Users\kinga\Documents\springboard-course\Capstone2\beervana\back-end\openbeerdb_csv\breweries.csv' DELIMITER ',' CSV HEADER;


\COPY categories FROM 'C:\Users\kinga\Documents\springboard-course\Capstone2\beervana\back-end\openbeerdb_csv\categories.csv' DELIMITER ',' CSV HEADER;

\COPY styles FROM 'C:\Users\kinga\Documents\springboard-course\Capstone2\beervana\back-end\openbeerdb_csv\styles.csv' DELIMITER ',' CSV HEADER;

\COPY beers FROM 'C:\Users\kinga\Documents\springboard-course\Capstone2\beervana\back-end\openbeerdb_csv\beers.csv' DELIMITER ',' CSV HEADER;