CREATE TABLE contents(  
    id UUID NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    review TEXT,
    notes TEXT,
    tag VARCHAR(50),
    score INT CHECK (score >= 0 AND score <= 100),
    created_at DATE,
    updated_at DATE
);

DROP TABLE IF EXISTS contents;