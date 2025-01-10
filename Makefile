init:
	cd backend_order_food_and_drink/ && source ~/.bashrc && npm i
	cd frontend_order_food_and_drink/ && source ~/.bashrc && npm i

run-server:
	cd backend_order_food_and_drink/ && source ~/.bashrc && npm start && cd ..

run-client:
	cd frontend_order_food_and_drink/ && source ~/.bashrc && npm run dev && cd ..

pull-server:
	cd backend_order_food_and_drink/ && git pull && cd ..