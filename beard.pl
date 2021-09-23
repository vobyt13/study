bottle(juice(info('Beard Vape Co.', 'E-Liquid'), brand('No. 00', 'Cappuccino Tabacco', 3, 60), total(25, 0))).
bottle(juice(info('Beard Vape Co.', 'E-Liquid'), brand('No. 00', 'Cappuccino Tabacco', 6, 60), total(25, 0))).

bottle(juice(info('Beard Vape Co.', 'E-Liquid'), brand('No. 05', 'New York Cheesecake', 3, 60), total(25, 0))).
bottle(juice(info('Beard Vape Co.', 'E-Liquid'), brand('No. 05', 'New York Cheesecake', 6, 60), total(25, 0))).

bottle(juice(info('Beard Vape Co.','E-Liquid'), brand('No. 24','Salted Caramel Malt',3,60), total(25,0))).
bottle(juice(info('Beard Vape Co.','E-Liquid'), brand('No. 24','Salted Caramel Malt',6,60), total(25,0))). 

bottle(juice(info('Beard Vape Co.','E-Liquid'), brand('No.32','Cinnamon Funnel Cake',3,60), total(25,0))).
bottle(juice(info('Beard Vape Co.','E-Liquid'), brand('No.32','Cinnamon Funnel Cake',6,60), total(25,0))).

missing_items(Company,Label,Flavor,Strength,Volume,Price,Quantity) :-
	bottle(juice(info(Company,Type),brand(Label, Flavor, Strength, Volume), total(Price, Quantity))),Type='E-Liquid',Quantity=0.

