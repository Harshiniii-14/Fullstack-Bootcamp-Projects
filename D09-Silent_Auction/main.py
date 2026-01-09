    import art
    print(art.logo)
    flag = True
    bidders = {}

    while flag:
        name = input("What is your name? ")
        bid = input("What is your bid price? $")
        bidders[name] = bid
        cont = input("Are there other bidders? y/n").lower()
        print("\n" * 20)
        if cont == "n":
            break


    highest_bidder = max(bidders, key=bidders.get)
    print(f"The highest bidder is {highest_bidder} with a bid of ${bidders[highest_bidder]}. They win the auction!")