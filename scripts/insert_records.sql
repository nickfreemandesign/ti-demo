INSERT INTO users 
    (first_name, last_name, email, password, ratings)
VALUES 
    ('nick',
     'freeman',
      'email',
      'yoyo',
      '[1,3,4,5,4,3,4,5,2]');

INSERT INTO users 
    (first_name, last_name, email, password, ratings)
VALUES 
    ('sam',
    'ple',
    'email1@email.com',
    'yoyo',
    '[1,3,4,5,2]');

INSERT INTO posts 
    (status, item, description, lender_id, borrower_id)
VALUES 
    ('open',
    'spoon',
    'shinest spoon in all the land',
    '1',
    null);

INSERT INTO posts 
    (status, item, description, lender_id, borrower_id)
VALUES 
    ('shared',
     'blender',
      'can blend the toughest of foods',
      '1',
      '2');