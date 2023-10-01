CREATE TABLE user_blog(
    user_id VARCHAR NOT NULL,
    nama VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    photo_profile VARCHAR NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE article (
    article_id VARCHAR PRIMARY KEY,
    title VARCHAR,
    content TEXT,
    banner TEXT,
    create_at TIMESTAMP DEFAULT now(),
    update_at TIMESTAMP,
    user_id VARCHAR
);
CREATE OR REPLACE FUNCTION update_article_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.update_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER update_article_timestamp
BEFORE UPDATE ON article
FOR EACH ROW
EXECUTE FUNCTION update_article_timestamp();